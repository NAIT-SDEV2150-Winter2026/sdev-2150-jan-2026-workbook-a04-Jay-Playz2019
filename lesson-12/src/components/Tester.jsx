import { useState } from "react";

export default function Tester() {
    const [searchTerm, setSearchTerm] = useState("Test");
    return (
        <>
            <input 
            type="text" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p className="alert alert-info mt-4">{searchTerm}</p>
        </>
    );
}