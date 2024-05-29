import { useContext } from "react";
import { ContextStatistic } from "../../App";

export default function Statistic() {

    const contextStatistic = useContext(ContextStatistic);

    return (
        <div className="statistic">
            <div>
                <h3>Statistics</h3>
            </div>
            <div>
                <span>Add product</span>
                <span>{contextStatistic.statistic.addCount}</span>
            </div>
            <div>
                <span>Remove product</span>
                <span>{contextStatistic.statistic.removeCount}</span>
            </div>
            <div>
                <span>Filter product</span>
                <span>{contextStatistic.statistic.filterCount}</span>
            </div>
        </div>
    );
}