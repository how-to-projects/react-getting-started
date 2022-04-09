import { useState, useEffect } from 'react';
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    /**
     * Not always called, only calls once the component is rendered 
     * Executed by React on our behalf
     */
    useEffect(() => {

        setIsLoading(true);
        /**
         * My own firebase for testing
         */
        const url = 'https://react-getting-started-e9446-default-rtdb.firebaseio.com/meetups.json';
        /**
         * fetch is a standard Javascript function
         */
        fetch(url)
            .then((response) => {
                /**
                 * JSON returns a promise, so need to do this
                 */
                return response.json();
            }).then((data) => {
                /**
                 * Promise returned from the fetch GET
                 */
                const meetups = [];

                for(const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }

                    meetups.push(meetup);
                }

                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
    }, []); // dependency array (or whatever value you want to use, could be isLoading, etc) - when this changes useEffects updates


    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }



    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    )
}

export default AllMeetupsPage;