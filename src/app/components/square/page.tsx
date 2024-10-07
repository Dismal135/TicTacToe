const Square = ({value, handleclick}: { value: string; handleclick: () => void }) => {
    return <button className="square" onClick={handleclick}>{value}</button>
}

export default Square