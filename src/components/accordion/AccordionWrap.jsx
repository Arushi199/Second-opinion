/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Accordion, {
    AccordionItem,
    AccordionTitle,
    AccordionContent,
} from "../accordion";

const AccordionWrap = () => {
    return (
        <Accordion classOption="accordion-style2 no-bg">
            <AccordionItem id="one">
                <AccordionTitle id="one">
                    What are the benefits of seeking a second Opinion?
                </AccordionTitle>
                <AccordionContent id="one">
                    There are many reasons why seeking a second opinion from a
                    specialist US physician could benefit you, including:
                    Confirm Your Diagnosis Before Treatment: If you are
                    concerned if your doctor is correct or have questions about
                    your treatment plan, a second opinion could answer many of
                    your questions. Conflicting Diagnosis: SeconOpinion can help
                    you figure out the correct diagnosis if you have received
                    different medical opinions. Peace of Mind: Worrying about
                    your health shouldn't keep you up at night. Having an expert
                    give you a second opinion should put your mind at ease.
                    Clarity about Persistent Symptoms: Your doctor said
                    everything is fine, but symptoms would not go away. A second
                    opinion from a specialist will give you a clear path toward
                    solving your health problems. Discussing other possible
                    options of treatment: More often than not, there are many
                    treatment options for each medical condition and it may take
                    another viewpoint to find the best treatment option for you.
                    Delayed Report & Need Answers Fast: Your issue might be
                    serious, but wait times may be long. A second opinion will
                    get you answers fast, and let you move forward with
                    treatment.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="two">
                <AccordionTitle id="two">
                    Can I connect with SecondOpinion if l am not in the United
                    States?
                </AccordionTitle>
                <AccordionContent id="two">
                    Absolutely. Second Opinion is designed for global use to
                    connect patients all across the world with leading US
                    physicians. Thus, wherever you are located will not be a
                    concern to scheduling your SecondOpinion appointment today.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="three">
                <AccordionTitle id="three">
                    How much does an appointment cost?
                </AccordionTitle>
                <AccordionContent id="three">Coming soon!</AccordionContent>
            </AccordionItem>
            <AccordionItem id="four">
                <AccordionTitle id="four">What is Telehealth?</AccordionTitle>
                <AccordionContent id="four">
                    Telehealth is the use of technology, typically smartphones,
                    personal computers, or laptops, that allows clients to be
                    seen by a physician remotely wherever the patient is.With
                    Telehealth, you can be seen when it is best for you.
                    Telemedicine eliminates travel time and expenses, and allows
                    you to be seen at your convenience, without leaving the
                    comfort of your home.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="five">
                <AccordionTitle id="five">
                    How are my appointments scheduled?
                </AccordionTitle>
                <AccordionContent id="five">
                    Our US-based physicians are available at your fingertips.
                    Our platform allows you to choose the appointment time that
                    works best for you. With SecondOpinion, you’re able to meet
                    virtually with an expert or get a written report about your
                    medical condition and other possible treatment options.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionWrap;
