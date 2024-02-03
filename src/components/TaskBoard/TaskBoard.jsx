import { useState } from "react";
import { toast } from "react-toastify";
import AddTask from "../AddTask/AddTask";
import NotFoundTask from "../NotFoundTask/NotFoundTask";
import SearchTask from "../SearchTask/SearchTask";
import TaskAction from "../TaskAction/TaskAction";
import TaskList from "../TaskList/TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Accelarator",
    description:
      "I want to Learn react such than I can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "learnwithnahid", "react.js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  function handleAddEditTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
      toast.success("Task Added Successfully");
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );

      toast.success("Task Edited Successfully");
    }
    setShowAddModal(false);
  }
  const handleEditTask = (task) => {
    setShowAddModal(true);
    setTaskToUpdate(task);
  };
  const handleDeleteTask = (taskId) => {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
    toast.success("Task Deleted Successfully");
  };

  const handleDeleteAllTasks = () => {
    tasks.length = 0;
    setTasks([...tasks]);
    toast.success("All Task Deleted");
  };

  const handleFavorite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  };

  const handleSearchTask = (searchTerm) => {
    console.log(searchTerm);
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks([...filtered]);
  };
  return (
    <section
      className="mb-20"
      id="tasks"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {showAddModal && (
        <AddTask
          onCloseClick={() => {
            setShowAddModal(false);
            setTaskToUpdate(null);
          }}
          taskToUpdate={taskToUpdate}
          onSave={handleAddEditTask}
        />
      )}
      <div className="container">
        {/* <!-- Search Box --> */}
        <SearchTask onSearchTask={handleSearchTask} />
        {/* Search Box Ends  */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* action button  */}
          <TaskAction
            handleDeleteAllTasks={handleDeleteAllTasks}
            onAddClick={() => setShowAddModal(true)}
          />
          {/* action button  */}
          <div className="overflow-auto">
            {tasks.length > 0 ? (
              <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                  <tr>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                      Title
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                      Description
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                      Tags
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                      Priorityx
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                      Optionsx
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TaskList
                    onFav={handleFavorite}
                    onDelete={handleDeleteTask}
                    onEdit={handleEditTask}
                    tasks={tasks}
                  />
                </tbody>
              </table>
            ) : (
              <NotFoundTask></NotFoundTask>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
