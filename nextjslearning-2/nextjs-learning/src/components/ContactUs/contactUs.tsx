import React, { useState } from "react";

interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

interface SubmitButton {
  label: string;
}

interface ContactFormProps {
  title: string;
  fields: FormField[];
  submitButton: SubmitButton;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title,
  fields,
  submitButton,
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-mainBg bg-opacity-30 py-[75px]">
      <div className="container mx-auto">
        <h2 className="pb-5 mb-12 flex justify-center items-center text-2xl text-subColor font-bold">
          Contact Us
        </h2>
        <div className="p-12 bg-white">
          <h2 className="mb-12 text-subColor font-bold text-xl">{title}</h2>
          <div onSubmit={handleSubmit} className="">
            <div className="grid grid-cols-2">
              <div className="flex flex-col mb-2 pr-[15px]">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  onChange={handleFieldChange}
                  className="px-3 py-1.5  w-full border-borderColor border-[1px]"
                />
              </div>
              <div className="flex flex-col mb-2 pl-[15px]">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  onChange={handleFieldChange}
                  className="px-3 py-1.5  w-full border-borderColor border-[1px]"
                />
              </div>
            </div>
            {fields.map((field) => (
              <div key={field.id} className="flex flex-col mb-2">
                <label htmlFor={field.id}>{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    cols={30}
                    rows={7}
                    placeholder={field.placeholder}
                    required={field.required}
                    onChange={handleFieldChange}
                    className="px-3 py-1.5  w-full border-borderColor border-[1px]"
                  />
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    onChange={handleFieldChange}
                    className="px-3 py-1.5 w-full border-borderColor border-[1px]"
                  />
                )}
              </div>
            ))}
            <button className="uppercase bg-subColor hover:text-white hover:bg-secondary text-lightColor px-[30px] py-[15px] rounded-full">
              {submitButton.label}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
