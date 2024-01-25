
const ActivityCard = () => {
    return (
        <section className="flex flex-col bg-white rounded-lg p-6 gap-6 text-[#0F1420] font-normal text-lg">
            <p className="font-bold text-xl">
                Activity:
            </p>
            <table>
                <tbody>
                    <tr>
                        <td className="font-bold">
                            Suzette Goldstein
                        </td>
                        <td>
                            Created this task
                        </td>
                        <td>
                            08/24/2023
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default ActivityCard;