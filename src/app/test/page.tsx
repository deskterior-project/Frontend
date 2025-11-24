"use client";

import TextField from "@/components/ui/TextField";
import { useState } from "react";

export default function TestPage() {
  const [name, setName] = useState("");
  return (
    <div className="flex flex-col ml-52 mt-8 gap-8 w-[335px]">
      <TextField id="1" state="default" value={name} />
      <TextField id="3" state="success" value={name} />
      <TextField id="4" state="error" value={name} />
      <TextField id="5" state="disabled" value={name} />
      <TextField id="6" state="complete" value={name} />
      <TextField id="7" state="default" value={name} />
      <TextField id="9" state="success" value={name} />
      <TextField id="10" state="error" value={name} />
      <TextField id="11" state="disabled" value={name} />
      <TextField id="12" state="complete" value={name} />
    </div>
  );
}
