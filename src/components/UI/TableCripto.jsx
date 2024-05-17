const TableCripto = (history) => {
    return(
        <div className="overflow-x-auto">
                    <table className="w-full bg-white shadow-md rounded mb-4">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="py-2 px-4">Fecha</th>
                                <th className="py-2 px-4">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map(({ date, priceUsd, time }) => (
                                <tr key={time} className="border-t">
                                    <td className="py-2 px-4">{new Date(date).toLocaleDateString()}</td>
                                    <td className="py-2 px-4">${parseFloat(priceUsd).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
    )
}

export default TableCripto