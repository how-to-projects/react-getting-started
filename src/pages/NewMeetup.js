import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {

    const navigation = useNavigate();

    function addMeetupHandler(meetupData) {
        
        /**
         * My own firebase for testing
         */
        const url = 'https://react-getting-started-e9446-default-rtdb.firebaseio.com/meetups.json';

        /**
         * fetch is a standard Javascript function
         */
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigation('/');
        });
    }

    return (
        <section>
            <h1>New Meetups</h1>
            <NewMeetupForm onAddMeetup={ addMeetupHandler }/>
        </section>
        
    )
}

export default NewMeetupsPage;