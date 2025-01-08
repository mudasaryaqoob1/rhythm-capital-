import { useState } from "react";
import { Table, Modal } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  Account: string;
  Signature: string;
  Payment_Link: string;
  Certificate: string;
  Date: string;
}

const SignatureTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Account",
      dataIndex: "Account",
      key: "Account",
      render: (text) => (
        <a
          onClick={showModal}
          className="font-semibold underline font-urbanist text-[10px] md:text-[14px] leading-[20px] text-[solid] cursor-pointer"
        >
          {text}
        </a>
      ),
    },
    {
      title: "Signature",
      dataIndex: "Signature",
      key: "Signature",
    },
    {
      title: "Payment Link",
      dataIndex: "Payment_Link",
      key: "Payment Link",
    },
    {
      title: "Certificate",
      dataIndex: "Certificate",
      key: "Certificate",
      render: (_, record) => (
        <a className="underline" href={record.Certificate}>
          Certificate
        </a>
      ),
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      Account: "RYTHM-248556-02",
      Signature: "Signed (Lifetime)",
      Payment_Link: "Payment Completed",
      Certificate: "Certificate",
      Date: "09/25/2024 23:54:58",
    },
    {
      key: "2",
      Account: "RYTHM-248556-02",
      Signature: "Pending (Monthly)",
      Payment_Link: "Payment Completed",
      Certificate: "Certificate",
      Date: "09/25/2024 23:54:58",
    },
    {
      key: "3",
      Account: "RYTHM-248556-02",
      Signature: "Signed (Monthly)",
      Payment_Link: "Payment Completed",
      Certificate: "Certificate",
      Date: "09/25/2024 23:54:58",
    },
  ];

  return (
    <>
      <Table<DataType> columns={columns} dataSource={data} />

      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Continue"
        className="custom-modal"
      >
        <div className="my-4 flex justify-center items-center flex-col gap-4">
          <img src="/requestPyouts/Featured.png" alt="Success" />
          <div className="">
            <h1 className="text-[20px] text-center text-[#101828] leading-[30px] font-bold">
              Signature Signed
            </h1>
            <p className="text-[14px] text-center pt-1 text-[#475467] leading-[20px] font-normal">
              PA Agreement for
              <span className="font-bold text-[#626974]">
                (RYTHM-248556-02)
              </span>{" "}
              has been signed!
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignatureTable;
