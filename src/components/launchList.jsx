import {Launch} from "./launch"

function LaunchList(props) {
    // props.launches.forEach((launch, i) => {console.log(i, launch.id)})
    return (
        <aside className="aside" id="launchesContainer">
            <h3>Launches</h3>
            <div id="listContainer">
                <ul>
                    {props.launches.map((launch, i) => {
                        return <Launch launch={launch} index={i}/>
                    })}
                </ul>
            </div>
        </aside>
    )
}

export {LaunchList}