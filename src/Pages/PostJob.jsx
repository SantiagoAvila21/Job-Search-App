import { createRef, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { postWithToken } from '../api';
import Form from '../Components/Form'
import Input from '../Components/Input';
import { authContext } from '../Context/AuthContext';
import '../Styles/postjob.css'


const PostJob = () => {
    const context = useContext(authContext);

    const title = createRef();
    const categories = createRef();
    const locations = createRef();
    const salary = createRef();
    const description = createRef();

    const clearInputs = () => {
        title.current.value = "";
        categories.current.value = "";
        locations.current.value = "";
        salary.current.value = "";
        description.current.value = "";
    }

    const submitJob = (event) => {
        event.preventDefault();
        console.log(categories)
        const category = categories.current.value.split(',');
        let location = locations.current.value.split(',');
        location = {
            "country": location[0],
            "province": location[1],
            "city": location[2]
        }
        if(title.current.value && categories.current.value && locations.current.value && salary.current.value && description.current.value && salary.current.value > 10){
            postWithToken('/api/jobs', {
                "employer":{
                    id: context.auth.id,
                    name: context.auth.name,
                    email: context.auth.email,
                    role: "employer"
                },
                description: description.current.value,
                title: title.current.value,
                category,
                location,
                salary: salary.current.value
            })
            .then(res => {
                console.log(res.data)
                toast.success("Offer submitted Succesfully");
                clearInputs();
            })
            .catch(err => {
                toast.error(err);
            })
        }else toast.error("Please fill all the form");
    }

    return (
        <div className='jobFormContainer'>
            <Form title="Post a Job">
                <Input type="text" title="Job title" placeholder="Job title" ref={title}></Input>
                <Input type="text" title="Job Categories" placeholder="Please separate with commas each category" ref={categories}></Input>
                <Input type="text" title="Location" placeholder="Country, Province, City" ref={locations}></Input>
                <Input type="number" title="Salary" placeholder="Salary in dollars" ref={salary}></Input>
                <h5> Job Description </h5>
                <textarea id="longInput" placeholder='Give a Description of the offer' ref={description}></textarea>
                <button className="sendButton" onClick={submitJob} >Submit Offer</button>
            </Form>
            <ToastContainer position="bottom-center" />
        </div>
    );
}

export default PostJob;