import * as d3 from "d3";

function LaunchList(props) {
    const launchOnMouseOver = (launch) => {
        return (event) => {
            const launchpadElement = d3.select(`#i${launch.launchpad}`)
            launchpadElement.attr("class", "highlightedLaunchpad")

            d3.select("#launchpads").selectAll("path").sort((a,b) => {
                if (a.id == launch.launchpad) {
                    return 1
                }

                return -1
            })
        }
    }

    const launchOnMouseLeave = (launch) => {
        return (event) => {
            const launchpadElement = d3.select(`#i${launch.launchpad}`)
            launchpadElement.attr("class", "launchpad")
        }
    }
    return (
        <aside className="aside" id="launchesContainer">
            <h3>Launches</h3>
            <div id="listContainer">
                <ul>
                    {props.launches.map((launch, i) => {
                        return <li key={launch.id} className="launchItem" 
                            onMouseOver={launchOnMouseOver(launch)}
                            onMouseLeave={launchOnMouseLeave(launch)}>
                                {launch.name} 
                        </li>
                    })}
                </ul>
            </div>
        </aside>
    )
}

export {LaunchList}