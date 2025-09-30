function remote_con({ type="year", options=[] }) {
    let defaultOptions = options;
    
    if (options.length === 0) {
        switch (type) {
            case "year":
                const currentYear = new Date().getFullYear();
                defaultOptions = Array.from({ length: 1 }, (_, i) => `${currentYear - i}년`);
                break;
            case "month":
                defaultOptions = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
                break;
            case "day":
                defaultOptions = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);
                break;
            case "hour":
                defaultOptions = Array.from({ length: 24 }, (_, i) => `${i}:00`);
                break;
            default:
                defaultOptions = [];
        }
    }
    return (
    <>
    <select>
        {defaultOptions.map((opt, index) => (
        <option key={index} value={opt}>
            {opt}
        </option>    
        ))}
    </select>
    <div>~</div>
    <select>
        {defaultOptions.map((opt, index) => (
        <opt key={index} value={opt}>
            {opt}
        </opt>    
        ))}
    </select>
    </>
    );
}
export default remote_con;