const TimeSelector = ({ onChange, value, id, name, className }) => {
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 8; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        options.push(
          <option key={timeString} value={timeString}>
            {timeString}
          </option>,
        );
      }
    }
    return options;
  };

  return (
    <select
      onChange={onChange}
      value={value}
      id={id}
      name={name}
      className={className}
    >
      <option value="">Seleccionar hora</option>
      {generateTimeOptions()}
    </select>
  );
};

export default TimeSelector;
