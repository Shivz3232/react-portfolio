/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "certificate",
  title: "Certificate",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "from",
      title: "From",
      type: "string",
    },
    {
      name: "issuedDate",
      title: "Issued Date",
      type: "datetime",
    },
    {
      name: "certificate",
      title: "Certificate",
      type: "file",
    },
  ],
};
