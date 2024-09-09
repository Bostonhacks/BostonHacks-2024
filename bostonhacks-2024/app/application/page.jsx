"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import {
    ethnicities,
    genders,
    pronouns,
    states,
    countries,
    majors,
    educationLevels,
    sleepAccomodations,
    shirtSizes,
    diet,
} from '@/components/ApplicationComponents/ApplicationOptions';
import { schools } from '@/components/ApplicationComponents/ApplicationSchools';
import RegisterButton from '@/public/images/ApplyButton.svg';

const Application = ({ applicationId }) => {
    const router = useRouter();
    const [resume, setResume] = useState(null);

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const selectFieldStyles = {
        option: (defaultStyles, state) => ({
        ...defaultStyles,
        color: 'white',
        backgroundColor: state.isSelected ? 'rgb(167, 149, 129, 0.7)' : 'rgb(167, 149, 129)',
        }),
        control: (defaultStyles) => ({
        ...defaultStyles,
        height: '2.5rem',
        padding: '0 1rem',
        width: '100%',
        backgroundColor: '#A79581',
        color: 'white',
        borderRadius: '0.75rem',
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: 'white' }),
        dropdownIndicator: (defaultStyles) => ({ ...defaultStyles, color: 'white !important' }),
        indicatorSeparator: (defaultStyles) => ({ ...defaultStyles, display: 'none' }),
        menu: (defaultStyles) => ({ ...defaultStyles }),
        menuList: (base) => ({
        ...base,
        '::-webkit-scrollbar': {
            display: 'none',
        },
        }),
        placeholder: (defaultStyles) => ({ ...defaultStyles, color: 'white' }),
    };

    // Handle form submission
    const onSubmit = async (data) => {
        if (!data.collegeMajor) data.collegeMajor = 'N/A';
        if (resume) {
        alert('Application Submitted');
        router.push('/login');
        } else {
        alert('Please upload a resume');
        }
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden'; 
        return () => {
        document.body.style.overflow = 'visible';
        };
    }, []);

    return (
        <div className="w-[100vw] h-[100vh] overflow-hidden" >

        {/* Application Form */}
        <div className="absolute flex justify-center w-full" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="h-[70vh] w-[90vh] overflow-auto mx-4">
            <div className="text-center font-carroisGothic md:mt-5">
                <h2 className="text-white text-7xl sm:text-7xl font-bold">BostonHacks</h2>
                <h3 className="text-white text-7xl">2024</h3>
            </div>

            <hr className="border border-white w-3/4 mx-auto h-1 bg-white" />

            <form onSubmit={handleSubmit(onSubmit)} className="p-1 lg:px-[50px]">
                {/* General Information Section */}
                <div className="my-[50px] font-ppSupplyMono">
                <h3 className="font-ppSupplyMono text-white text-2xl sm:text-3xl font-bold">General Information</h3>
                <div className="md:grid md:grid-cols-2 md:gap-4">
                    {/* First Name */}
                    <div>
                    <label className="ml-1 font-ppSupplyMono">First Name</label>
                    <input placeholder="First Name" className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white rounded-xl" {...register('firstName', { required: true })} />
                    {errors.firstName && <span className="text-red-500">Required</span>}
                    </div>

                    {/* Last Name */}
                    <div>
                    <label className="ml-1 font-ppSupplyMono">Last Name</label>
                    <input placeholder="Last Name" className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white rounded-xl" {...register('lastName', { required: true })} />
                    {errors.lastName && <span className="text-red-500">Required</span>}
                    </div>

                    {/* Phone Number */}
                    <div>
                    <label className="ml-1 font-ppSupplyMono">Phone Number</label>
                    <input placeholder="Phone Number" className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white rounded-xl" {...register('phoneNumber', { required: true })} />
                    {errors.phoneNumber && <span className="text-red-500">Required</span>}
                    </div>

                    {/* Age */}
                    <div>
                    <label className="ml-1 font-ppSupplyMono">Age</label>
                    <input placeholder="Age" className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white rounded-xl" {...register('age', { required: true })} />
                    {errors.age && <span className="text-red-500">Required</span>}
                    </div>

                    {/* Ethnicity */}
                    <div>
                    <label className="ml-1 font-ppSupplyMono">Ethnicity</label>
                    <Controller name="ethnicity" control={control} render={({ field }) => <Select styles={selectFieldStyles} options={ethnicities.map(option => ({ label: option, value: option }))} {...field} />} rules={{ required: true }} />
                    {errors.ethnicity && <span className="text-red-500">Required</span>}
                    </div>

                    {/* Gender */}
                    <div>
                    <label className="ml-1 font-ppSupplyMono">Gender</label>
                    <Controller name="gender" control={control} render={({ field }) => <Select styles={selectFieldStyles} options={genders.map(option => ({ label: option, value: option }))} {...field} />} rules={{ required: true }} />
                    {errors.gender && <span className="text-red-500">Required</span>}
                    </div>

                    {/* Pronouns */}
                    <div>
                    <label className="ml-1 font-ppSupplyMono">Pronouns</label>
                    <Controller name="pronouns" control={control} render={({ field }) => <Select styles={selectFieldStyles} options={pronouns.map(option => ({ label: option, value: option }))} {...field} />} rules={{ required: true }} />
                    {errors.pronouns && <span className="text-red-500">Required</span>}
                    </div>
                </div>
                </div>

                {/* Address Section */}
                <div className="my-[50px] font-ppSupplyMono">
                <h3 className="font-ppSupplyMono text-white text-2xl sm:text-3xl font-bold">Address Information</h3>
                <div className="md:grid md:grid-cols-2 md:gap-4">
                    <div>
                    <label className="ml-1 font-ppSupplyMono">Address</label>
                    <input placeholder="Address" className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white rounded-xl" {...register('address', { required: true })} />
                    {errors.address && <span className="text-red-500">Required</span>}
                    </div>

                    <div>
                    <label className="ml-1 font-ppSupplyMono">City</label>
                    <input placeholder="City" className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white rounded-xl" {...register('city', { required: true })} />
                    {errors.city && <span className="text-red-500">Required</span>}
                    </div>

                    <div>
                    <label className="ml-1 font-ppSupplyMono">State</label>
                    <Controller name="state" control={control} render={({ field }) => <Select styles={selectFieldStyles} options={states.map(option => ({ label: option, value: option }))} {...field} />} rules={{ required: true }} />
                    {errors.state && <span className="text-red-500">Required</span>}
                    </div>

                    <div>
                    <label className="ml-1 font-ppSupplyMono">Country</label>
                    <Controller name="country" control={control} render={({ field }) => <Select styles={selectFieldStyles} options
                        = {countries.map(option => ({ label: option, value: option }))} {...field} />} rules={{ required: true }} />
                        {errors.country && <span className="text-red-500">Required</span>}
                    </div>
    
                    <div>
                        <label className="ml-1 font-ppSupplyMono">Zip Code</label>
                        <input placeholder="Zip Code" className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white rounded-xl" {...register('zipCode', { required: true })} />
                        {errors.zipCode && <span className="text-red-500">Required</span>}
                    </div>
                    </div>
                </div>
    
                {/* Education Section */}
                <div className="my-[50px] font-ppSupplyMono">
                    <h3 className="font-ppSupplyMono text-white text-2xl sm:text-3xl font-bold">Education</h3>
                    <div className="md:grid md:grid-cols-2 md:gap-4">
                    <div>
                        <label className="ml-1 font-ppSupplyMono">School</label>
                        <Controller name="school" control={control} render={({ field }) => <Select styles={selectFieldStyles} options={schools.map(option => ({ label: option, value: option }))} {...field} />} rules={{ required: true }} />
                        {errors.school && <span className="text-red-500">Required</span>}
                    </div>
    
                    <div>
                        <label className="ml-1 font-ppSupplyMono">Graduation Year</label>
                        <input placeholder="Graduation Year" className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white rounded-xl" {...register('collegeYear', { required: true })} />
                        {errors.collegeYear && <span className="text-red-500">Required</span>}
                    </div>
    
                    <div>
                        <label className="ml-1 font-ppSupplyMono">Major</label>
                        <Controller name="major" control={control} render={({ field }) => <Select styles={selectFieldStyles} options={majors.map(option => ({ label: option, value: option }))} {...field} />} rules={{ required: true }} />
                        {errors.major && <span className="text-red-500">Required</span>}
                    </div>
    
                    <div>
                        <label className="ml-1 font-ppSupplyMono">Education Level</label>
                        <Controller name="educationLevel" control={control} render={({ field }) => <Select styles={selectFieldStyles} options={educationLevels.map(option => ({ label: option, value: option }))} {...field} />} rules={{ required: true }} />
                        {errors.educationLevel && <span className="text-red-500">Required</span>}
                    </div>
                    </div>
                </div>
    
                {/* Miscellaneous Section */}
                <div className="my-[50px] font-ppSupplyMono">
                    <h3 className="font-ppSupplyMono text-white text-2xl sm:text-3xl font-bold">Miscellaneous</h3>
                    <div className="md:grid md:grid-cols-2 md:gap-4">
                    <div>
                        <label className="ml-1 font-ppSupplyMono">Dietary Restrictions</label>
                        <Controller name="diet" control={control} render={({ field }) => <Select styles={selectFieldStyles} options={diet.map(option => ({ label: option, value: option }))} {...field} />} rules={{ required: true }} />
                        {errors.diet && <span className="text-red-500">Required</span>}
                    </div>
    
                    <div>
                        <label className="ml-1 font-ppSupplyMono">If other, please specify:</label>
                        <input placeholder="" className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white rounded-xl" {...register('otherDiet')} />
                    </div>
    
                    <div>
                        <label className="ml-1 font-ppSupplyMono">T-Shirt Size</label>
                        <Controller name="shirtSize" control={control} render={({ field }) => <Select styles={selectFieldStyles} options={shirtSizes.map(option => ({ label: option, value: option }))} {...field} />} rules={{ required: true }} />
                        {errors.shirtSize && <span className="text-red-500">Required</span>}
                    </div>
    
                    <div>
                        <label className="ml-1 font-ppSupplyMono">Do you need sleep accommodations?</label>
                        <Controller name="sleep" control={control} render={({ field }) => <Select styles={selectFieldStyles} options={sleepAccomodations.map(option => ({ label: option, value: option }))} {...field} />} rules={{ required: true }} />
                        {errors.sleep && <span className="text-red-500">Required</span>}
                    </div>
                    </div>
                </div>
    
                {/* BostonHacks Excitement Question */}
                <div className="my-[50px] font-ppSupplyMono">
                    <label className="font-ppSupplyMono text-white text-2xl sm:text-3xl font-bold">
                        What are you most excited about attending Bostonhacks?
                    </label>
                    <p className="font-ppSupplyMono text-white text-xl font-bold mb-10">
                        (Min 50 Max 400 Characters):
                    </p>
                    <textarea
                        placeholder="Tell us more!"
                        className="w-full h-[200px] resize-none p-1 rounded-xl px-4 bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25"
                        {...register('bostonhacks', {
                        required: true,
                        maxLength: 400,
                        minLength: 50,
                        })}
                    />
                    {errors.bostonhacks?.type === 'required' && (
                        <span className="text-red-500 ml-4">Required</span>
                    )}
                    {errors.bostonhacks?.type === 'minLength' && (
                        <span className="text-red-500 ml-4">Tell us more!</span>
                    )}
                    {errors.bostonhacks?.type === 'maxLength' && (
                        <span className="text-red-500 ml-4">Too many characters!</span>
                    )}
                    </div>

                    {/* New question: Track interest */}
                    <div className="my-[50px] font-ppSupplyMono">
                    <label className="font-ppSupplyMono text-white text-2xl sm:text-3xl font-bold">
                        What track interests you the most and why?
                    </label>
                    <p className="font-ppSupplyMono text-white text-xl font-bold mb-10">
                        (Min 50 Max 400 Characters):
                    </p>
                    <textarea
                        placeholder="Tell us more!"
                        className="w-full h-[200px] resize-none p-1 rounded-xl px-4 bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25"
                        {...register('trackInterest', {
                        required: true,
                        maxLength: 400,
                        minLength: 50,
                        })}
                    />
                    {errors.trackInterest?.type === 'required' && (
                        <span className="text-red-500 ml-4 font-ppSupplyMono">Required</span>
                    )}
                    {errors.trackInterest?.type === 'minLength' && (
                        <span className="text-red-500 ml-4">Tell us more!</span>
                    )}
                    {errors.trackInterest?.type === 'maxLength' && (
                        <span className="text-red-500 ml-4">Too many characters!</span>
                    )}
                    </div>
    
                {/* Terms and Conditions */}
                <div className="my-[50px] font-ppSupplyMono">
                    <h2 className="font-ppSupplyMono text-white text-2xl sm:text-3xl font-bold">MLH Terms and Conditions</h2>
    
                    <div className="flex flex-row my-5">
                    <input type="checkbox" {...register('acceptTerms', { required: true })} />
                    <p className="ml-4">Do you agree to the <a className="underline" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>?</p>
                    {errors.acceptTerms && <span className="text-red-500 ml-4">Required</span>}
                    </div>
    
                    <div className="flex flex-row my-5">
                    <input type="checkbox" {...register('acceptTerms2', { required: true })} />
                    <p className="ml-4">I authorize sharing my information with MLH for event administration, ranking, and more. I agree to the <a className="underline" href="https://mlh.io/privacy">MLH Privacy Policy</a>.</p>
                    {errors.acceptTerms2 && <span className="text-red-500 ml-4">Required</span>}
                    </div>
    
                    <div className="flex flex-row my-5">
                    <input type="checkbox" {...register('acceptTerms3')} />
                    <p className="ml-4">I authorize MLH to send me emails with event updates and newsletters.</p>
                    </div>
                </div>
    
                {/* Resume Upload */}
                <div className="my-[50px]">
                    <p className="font-ppSupplyMono text-white text-2xl sm:text-3xl font-bold mb-10">Resume Upload</p>
                    <input type="file" accept=".pdf, .docx" onChange={(e) => setResume(e.target.files[0])} />
                </div>
    
                <div className="w-full flex justify-end">
                    <button type="submit">
                    <Image src={RegisterButton} alt="Register" width={200} height={60} />
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
    );
};
export default Application;
