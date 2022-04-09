import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {

    /**
     * Refs are good for reading values, not setting. If you 
     * want to set values, you should use state
     */
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        /**
         * Prevent browser default form submission
         */
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            desciption: enteredDescription
        }

        // console.log('MEETUP DATA', meetupData); 
        props.onAddMeetup(meetupData);
    }

    const handleChange = (event) => {
        // console.log('CHANGE EVENT', event.target.value);
    }

    // function handleChange(event) {
    //     console.log('CHANGE EVENT', event.target.value);
    // }

    return (
        <Card>
            <form className={ classes.form } onSubmit={ submitHandler }>
                <div className={ classes.control }>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id="title" onChange={ handleChange } ref={ titleInputRef }/>
                </div>
                <div className={ classes.control }>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id="image" ref={ imageInputRef }/>
                </div>
                <div className={ classes.control }>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' required id="address" ref={ addressInputRef }/>
                </div>
                <div className={ classes.control }>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea required id='description' rows='5' ref={ descriptionInputRef }/>
                </div>
                <div className={ classes.actions }>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;