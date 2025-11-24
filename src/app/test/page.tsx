"use client";

import TextField from "@/components/ui/TextField";
import { useState } from "react";

export default function TestPage() {
  const [name, setName] = useState("");
  return (
    <div className="flex flex-col ml-52 mt-8 gap-8">
      <TextField
        id="1"
        state="default"
        version="pc"
        value={name}
        onChange={setName}
      />
      {/* <TextField id="2" state="focused" version="pc" />
      <TextField id="3" state="success" version="pc" />
      <TextField id="4" state="error" version="pc" />
      <TextField id="5" state="disabled" version="pc" />
      <TextField id="6" state="complete" version="pc" />
      <TextField id="7" state="default" version="mo" />
      <TextField id="8" state="focused" version="mo" />
      <TextField id="9" state="success" version="mo" />
      <TextField id="10" state="error" version="mo" />
      <TextField id="11" state="disabled" version="mo" />
      <TextField id="12" state="complete" version="mo" /> */}
    </div>
  );
}
