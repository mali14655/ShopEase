import { useState, useEffect } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add or Update task
  const handleAddOrUpdate = () => {
    if (!input.trim()) return;

    if (editingId) {
      setTasks(
        tasks.map((task) =>
          task.id === editingId ? { ...task, text: input } : task
        )
      );
      setEditingId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text: input }]);
    }
    setInput("");
  };

  // Delete task
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Start editing
  const handleEdit = (task) => {
    setInput(task.text);
    setEditingId(task.id);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          ✅ Task Manager
        </h1>

        {/* Input + Button */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="✍️ Enter a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={handleAddOrUpdate}
            className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {editingId ? "Update" : "Add"}
          </button>
        </div>

        {/* Tasks List */}
        {tasks.length > 0 ? (
          <ul className="grid gap-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <span className="text-lg">{task.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(task)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No tasks added yet.</p>
        )}
      </div>
    </div>
  );
}
