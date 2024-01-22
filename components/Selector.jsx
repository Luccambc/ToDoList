const Selector = ({ statusTask, setStatusTask }) => {
  return (
    <div className="filter">
      <div className="filter-options">
        <p>Escolha o status das tarefas</p>
        <select
          value={statusTask}
          onChange={(ev) => setStatusTask(ev.target.value)}
        >
          <option value="all">Todas</option>
          <option value="done">Finalizadas</option>
          <option value="undone">Incompletas</option>
        </select>
      </div>
    </div>
  );
};

export default Selector;
