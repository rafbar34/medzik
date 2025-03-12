"use client";
import { Box, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { CustomButton } from "../common/button/button";

export const MultiFileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const formRef = useRef<HTMLFormElement>(null); // Referencja do formularza

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files) {
      const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "application/pdf",
      ];
      const maxSize = 5 * 1024 * 1024; // 5MB

      const validFiles = Array.from(event.target.files).filter(
        (file) => allowedTypes.includes(file.type) && file.size <= maxSize
      );

      if (validFiles.length < event.target.files.length) {
        alert(
          "Niektóre pliki zostały odrzucone. Dozwolone formaty: PNG, JPG, JPEG, PDF. Maksymalny rozmiar: 5MB."
        );
        event.target.value = "";
      }

      if (validFiles.length > 0) {
        setFiles((prev) => [...prev, ...validFiles]);
      }
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    files.forEach((file) => {
      formData.append("file", file);
    });

    const response = await fetch("/api/send-email", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="p-4 border border-[light_color] rounded-xl shadow-sm w-full flex items-center flex-col">
      <label className="block text-gray-700 font-medium mb-2">
        Dodaj pliki:
      </label>
      <Box className="w-3/4">
        <form
          ref={formRef}
          onSubmit={sendEmail}
        >
          <TextField
            type="text"
            name="from_name"
            placeholder="Twoje imię"
            fullWidth
            variant="standard"
            required
            className="mb-4 bg-white w-full p-2"
            sx={{ padding: 2, marginBottom: 4 }}
          />
          <TextField
            type="email"
            name="from_email"
            placeholder="Twój email"
            fullWidth
            variant="standard"
            required
            className="mb-4 bg-white w-full p-2"
            sx={{ padding: 2, marginBottom: 4 }}
          />
          <TextField
            type="file"
            onChange={handleFileChange}
            name="file"
            fullWidth
            variant="standard"
            sx={{ padding: 2, marginBottom: 4 }}
            inputProps={{ multiple: false }}
          />
          {files.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-gray-600 mb-2">Wybrane pliki:</p>
              <ul className="space-y-2">
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2 bg-gray-100 rounded-lg"
                  >
                    <span className="text-sm">{file.name}</span>
                    <button
                      type="button"
                      className="text-red-500 text-sm font-medium hover:underline"
                      onClick={() => removeFile(index)}
                    >
                      Usuń
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <CustomButton
            title="Prześlij"
            width="2/5"
            type="submit"
          />
        </form>
      </Box>
    </div>
  );
};
