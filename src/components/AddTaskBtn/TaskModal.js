import React from "react";

const TaskModal = () => {
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="addTaskModal" className="modal-toggle"/>
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-gray-700 font-sans">
        <label htmlFor="addTaskModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h2 className="text-center my-5 font-bold text-2xl">Add New Task</h2>
          <form className="flex flex-col">
            <input className="text-1xl border-b-4 outline-0 my-5" type="text" placeholder="Enter new todo..."/>
            
            <textarea className="h-24 outline-0 py-5 border-b-4 text-1xl" name="" id="" cols="20" rows="10" placeholder="Enter task deatil"></textarea>
          </form>

          <div className="modal-action">
            <label htmlFor="addTaskModal" className="btn">
              Save
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
