import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/task/taskSlice";

const AddTask = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };
  return (
    <Modal title={"Programming Hero"} isOpen={isOpen} setIsOpen={setIsOpen}>
      <form
        className="flex flex-col gap-3 mt-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-md"
            id="title"
            type="text"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="w-full rounded-md"
            id="description"
            type="text"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="date">Description</label>
          <input
            className="w-full rounded-md"
            id="date"
            type="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="assign_to">Description</label>
          <select
            className="w-full rounded-md"
            {...register("assign_to")}
            id="assign_to"
          >
            <option value={"MD Shahed"}>MD Shahed</option>
            <option value={"MD Shahed"}>Riyad</option>
            <option value={"MD Shahed"}>Tanvir</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="priority">Priority</label>
          <select
            className="w-full rounded-md"
            {...register("priority")}
            id="priority"
          >
            <option value={"high"}>High</option>
            <option value={"modred"}>Modred</option>
          </select>
        </div>
        <div className="flex items-center justify-end gap-4 mt-7">
          <button onClick={onCancel} className="btn btn-danger" type="submit">
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTask;
