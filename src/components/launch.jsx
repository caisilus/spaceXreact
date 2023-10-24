function Launch(props) {
    const launch = props.launch
    const launchOnMouseOver = (event) => {
        const launchpadElement = document.getElementById(launch.launchpad)
        launchpadElement.classList.remove("launchpad")
        launchpadElement.classList.add("hightlightedLaunchpad")
    }

    const launchOnMouseLeave = (event) => {
        const launchpadElement = document.getElementById(launch.launchpad)
        launchpadElement.classList.remove("hightlightedLaunchpad")
        launchpadElement.classList.add("launchpad")
    }

    return <li key={props.index} className="launchItem" 
               onMouseOver={launchOnMouseOver}
               onMouseLeave={launchOnMouseLeave}>
                {launch.name} 
           </li>
}

export {Launch}