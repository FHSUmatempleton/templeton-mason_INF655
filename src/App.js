function App() {
  const myName = "Mason";

  const toDoList = [
    {
      id: 1,
      title: "task1",
      description: "description1"
    },
    {
      id: 2,
      title: "task2",
      description: "description2"
    },
    {
      id: 3,
      title: "task3",
      description: "description3"
    }
  ];

  const taskManager = () => {
    const int = Math.floor(Math.random() * 3);
    return toDoList[int].title;
  };

  return (
    <div className="random">
      <p>Hello {myName} you have a task of <h3>{taskManager()}</h3></p>
    </div>
  );
}

export default App;
