'use client';
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const NavDropdown = () => {


    return (
        <div className={"items-center form-control w-full mx-auto block lg:hidden transition duration-1000"}>
            <div className={"form-control w-full mx-auto bg-base-200 px-4 overflow-hidden lg:px-20 py-2"}>
                <div className="label">
                    <span className="label-text font-bold">Select Subject to Learn</span>
                </div>
                <select className="select select-bordered w-full" defaultValue={"partsOfSpeech"}>
                    <optgroup label="Grammar">
                        <option value="partsOfSpeech">Parts of Speech</option>
                        <option value="sentenceStructure">Sentence Structure</option>
                        <option value="verbTenses">Verb Tenses</option>
                    </optgroup>
                    <optgroup label="Vocabulary">
                        <option value="basicVocabulary">Basic Vocabulary</option>
                        <option value="advancedVocabulary">Advanced Vocabulary</option>
                        <option value="idioms">Idioms</option>
                    </optgroup>
                    <optgroup label="Listening Comprehension">
                        <option value="audioLessons">Audio Lessons</option>
                        <option value="dialogues">Dialogues</option>
                        <option value="podcasts">Podcasts</option>
                    </optgroup>
                    <optgroup label="Speaking Practice">
                        <option value="conversation">Conversation Practice</option>
                        <option value="pronunciation">Pronunciation</option>
                        <option value="publicSpeaking">Public Speaking</option>
                    </optgroup>
                    <optgroup label="Reading Skills">
                        <option value="comprehension">Comprehension Exercises</option>
                        <option value="literature">Literature Analysis</option>
                        <option value="readingStrategies">Reading Strategies</option>
                    </optgroup>
                    <optgroup label="Writing Skills">
                        <option value="essayWriting">Essay Writing</option>
                        <option value="creativeWriting">Creative Writing</option>
                        <option value="academicWriting">Academic Writing</option>
                    </optgroup>
                </select>
            </div>


        </div>
    );
}

export default NavDropdown;