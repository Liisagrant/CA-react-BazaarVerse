import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),
  subject: Yup.string()
    .min(3, "Subject must be at least 3 characters")
    .required("Subject is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(3, "Message must be at least 3 characters")
    .required("Message is required"),
});

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitted(true);
    },
  });
  return (
    <div className="w-full max-w-md mx-auto p-4 my-20">
      {isSubmitted ? (
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className="lg:mt-40 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Thanks for your message!
          </h2>
          <div className="mt-12 flex flex-col justify-start">
            <Link
              to="/"
              className="text-sm font-semibold leading-7 text-lightblue underline "
            >
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
            <div className="mt-10">
              <Link
                to="/products"
                className="text-sm font-semibold leading-7 text-lightblue underline"
              >
                <span aria-hidden="true">&larr;</span> Or some shopping?
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white rounded px-2 md:px-8 pt-16 pb-4 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              type="text"
              placeholder="Your name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-600 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formik.values.email}
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              placeholder="Your email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formik.values.subject}
              name="subject"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              placeholder="subject"
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className="text-red-600 text-sm">
                {formik.errors.subject}
              </div>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formik.values.message}
              name="message"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Your message"
              rows="4"
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-600 text-sm">
                {formik.errors.message}
              </div>
            ) : null}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-main w-40  hover:bg-lightblue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
