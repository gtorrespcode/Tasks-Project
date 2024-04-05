import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAddProject, onCancelAddProject}) => {
  const modal = useRef()
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open()
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
    <Modal ref={modal} buttonCaption="Close">
      <h2 className="text-xl font-bold text-green-500 my-4">Invalid Input</h2>
      <p className="text-green-600 mb-4">Ooops... looks like you forgot to enter a value</p>
      <p className="text-green-600 mb-4">Please make sure you provide a valid value for all the input fields</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className=" text-green-800 hover:text-green-950"
          onClick={onCancelAddProject}>
            Cancel
          </button>
        </li>
        <li>
          <button
            className=" px-6 py-2 bg-green-800 text-green-50 hover:bg-green-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
    </>
  );
};

export default NewProject;
