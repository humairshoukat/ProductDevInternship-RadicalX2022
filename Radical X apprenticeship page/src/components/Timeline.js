import React from "react"

export default function TimeLine(props){
    //const [date, setDate] = React.useState(new Date())
    const date = new Date()

    let scheduleOffset = 3 //in months
    const startMinDate = `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDay() + 1 < 10 ? `0${date.getDay() + 1}` : date.getDay() + 1}`
    const startMaxDate = `${date.getFullYear()}-${date.getMonth() + 1 + scheduleOffset < 10 ? `0${date.getMonth() + scheduleOffset}` : date.getMonth() + scheduleOffset}-${date.getDay() + 1 < 10 ? `0${date.getDay() + 1}` : date.getDay() + 1}`

    date.setMonth( parseInt(date.getMonth(), 10) + 3)
    // starts month and day from 0 so need to incremenet both by 1
    const endMinDate = `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDay() + 1 < 10 ? `0${date.getDay() + 1}` : date.getDay() + 1}`
    const endMaxDate = `${date.getFullYear()}-${date.getMonth() + scheduleOffset < 10 ? `0${date.getMonth() + scheduleOffset}` : date.getMonth() + scheduleOffset}-${date.getDay() + 1 < 10 ? `0${date.getDay() + 1}` : date.getDay() + 1}`
    
    const [time, setTime] = React.useState({
        start: startMinDate,
        end: endMinDate
    })

    React.useEffect( () => {
        props.func( prevVal => ({
            ...prevVal,
            time: time
        })
    )}, [time])


    function handleChange(event){
        const {name, value} = event.target

        setTime(prevVal => (
            {
                ...prevVal,
                [name]: value
            }
            )  
        ) 
        
        // if (name === 'start'){
        //     let arr = time.start.split('-')
        //     date.setFullYear(parseInt(arr[0]), parseInt(arr[1] - 1), parseInt(arr[2] - 1))
        //     setDate(date)
        //     // console.log("new", date)
        // } failed attempt to make the range dynamic
    }

    // console.log(time.start, " and date\n", date)

    return (
        <section className = "timeline">
            <label htmlFor="start">Start date:</label>

            <input type="date" id="start" name="start"
            value = {time.start} onChange = {handleChange}
            min = {startMinDate} max = {startMaxDate}/> {/*has to start at max 3 months after request */}

            <label htmlFor="end">End date:</label>

            <input type="date" id="end" name="end"
            value = {time.end} onChange = {handleChange}
            min = {endMinDate} max = {endMaxDate}/>

        </section>
    )
}