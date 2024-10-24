import { useState, useEffect } from "react";

interface StackTecProps {
  onChange: (value: { icon_name: string; tec_name: string }) => void;
}

export default function AddStack ({ onChange }: StackTecProps) {
  const [stackTec, setStackTec] = useState({
    icon_name: "",
    tec_name: "",
  });

  useEffect(() => {
    // Cada vez que el estado de stackTec cambia, se llama a la función onChange del padre
    onChange(stackTec);
  }, [stackTec, onChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStackTec((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <label>
        Icon Name:
        <input
          type="text"
          name="icon_name"
          value={stackTec.icon_name}
          onChange={handleChange}
        />
      </label>
      <label>
        Technology Name:
        <input
          type="text"
          name="tec_name"
          value={stackTec.tec_name}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
