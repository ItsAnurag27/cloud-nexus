import { useEffect, useState } from "react";
import { Form, Input, Upload, Modal, Button, message, Space } from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const JobModal = ({ isOpen, onClose, jobData }) => {
  const apiUrl = import.meta.env.VITE_SUBMIT_APPLICATION;

  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileList, setFileList] = useState([]);
  console.log(apiUrl);

  useEffect(() => {
    if (!isOpen) {
      form.resetFields();
      setFileList([]);
    }
  }, [isOpen, form]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const validateFile = (file) => {
    const isValidType = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ].includes(file.type);

    if (!isValidType) {
      message.error("Only PDF or Word documents are allowed!");
      return Upload.LIST_IGNORE;
    }

    if (file.size / 1024 / 1024 > 5) {
      message.error("File must be smaller than 5MB!");
      return Upload.LIST_IGNORE;
    }

    return true;
  };

  const handleResumeUpload = ({ file }) => {
    setFileList([file]);
  };

  const handleSubmit = async (values) => {
    try {
      setIsSubmitting(true);

      if (!fileList.length) {
        message.error("Please upload a resume.");
        return;
      }

      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("phone", values.phone || "");
      formData.append("coverLetter", values.coverLetter || "");
      formData.append("jobId", jobData?.id);
      formData.append("jobTitle", jobData?.title);
      formData.append("jobDescription", jobData?.description);
      formData.append("resume", fileList[0]);

      console.log("Submitting application with:", Object.fromEntries(formData));

      const response = await fetch(apiUrl, {
        method: "POST",

        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      message.success("Application submitted successfully!");

      onClose();
      form.resetFields();
      setFileList([]);
    } catch (error) {
      message.error(error.message || "Failed to submit application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      title={`Apply for ${jobData?.title || "this position"}`}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width="90%"
      maxWidth={800}
      maskClosable={false}
      centered
      className="job-application-modal relative z-[99999]"
    >
      <div className="xl:px-8">
        <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>
                <span className="font-medium">Location:</span>{" "}
                {jobData?.location}
              </p>
              <p>
                <span className="font-medium">Type:</span> {jobData?.time}
              </p>
              <p>
                <span className="font-medium">Experience:</span>{" "}
                {jobData?.experience}
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium">Salary:</span> {jobData?.salary}
              </p>
              <p>
                <span className="font-medium">Deadline:</span>{" "}
                {jobData?.deadline}
              </p>
            </div>
          </div>
          <p className="mt-4">
            <span className="font-medium">Description:</span>{" "}
            {jobData?.description}
          </p>
        </div>

        {/* Application Form */}
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Enter your full name" },
              { min: 2, message: "Name must be at least 2 characters" },
            ]}
          >
            <Input placeholder="Your full name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input placeholder="Your email address" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Enter your phone number" },
              { pattern: /^\+?[\d\s-]{10,}$/, message: "Invalid phone number" },
            ]}
          >
            <Input placeholder="Your phone number" />
          </Form.Item>

          <Form.Item
            label="Resume"
            name="resume"
            rules={[{ required: true, message: "Upload your resume" }]}
            extra="Supported formats: PDF, DOC, DOCX (Max: 5MB)"
          >
            <Upload
              beforeUpload={validateFile}
              customRequest={({ file, onSuccess }) => {
                handleResumeUpload({ file });
                setTimeout(() => onSuccess("ok"), 0);
              }}
              fileList={fileList}
              onRemove={() => setFileList([])}
              maxCount={1}
              accept=".pdf,.doc,.docx"
              listType="text"
            >
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Cover Letter" name="coverLetter">
            <TextArea placeholder="Tell us why you're interested..." rows={4} />
          </Form.Item>

          <Form.Item className="mb-0 bg-white py-4 border-t flex justify-end">
            <Space>
              <Button onClick={onClose} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                disabled={isSubmitting}
                icon={isSubmitting ? <LoadingOutlined /> : null}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default JobModal;
