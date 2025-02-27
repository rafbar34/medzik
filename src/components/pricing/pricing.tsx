"use client";
import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { CustomButton } from "../common/button/button";

export const MultiFileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);

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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setFiles((prev: any) => [
          ...prev,
          ...(event.target.files ? Array.from(event.target.files) : []),
        ]);
      }
    }
  };
  console.log(files);
  const removeFile = (index: string | number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 border border-amber-500 rounded-xl shadow-sm w-full flex items-center flex-col">
      <label className="block text-gray-700 font-medium mb-2">
        Dodaj pliki:
      </label>
      <Box className=" w-3/4">
        <TextField
          type="file"
          onChange={handleFileChange}
          fullWidth
          variant="standard"
          className="mb-4 bg-white w-full  p-5"
        />
        {files.length > 0 && (
          <div className="mt-2">
            <p className="text-sm text-gray-600 mb-2">Wybrane pliki:</p>
            <ul className="space-y-2">
              {files.map((file, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2 bg-gray-100 rounded-lg"
                  >
                    <span className="text-sm">{file.name}</span>
                    <button
                      className="text-red-500 text-sm font-medium hover:underline"
                      onClick={() => removeFile(index)}
                    >
                      Usuń
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <CustomButton
          title="Prześlij"
          width={"2/5"}
        />
      </Box>
    </div>
  );
};
