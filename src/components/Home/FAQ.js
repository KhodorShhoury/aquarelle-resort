import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import React from 'react'
import '../../scss/components/Home/Faq.scss'
function FAQ() {
    return (
        <div className='faq'>
            <div className="container">
                <div className="text">
                    <h3>Frequently Asked Question</h3>
                    <p>Our FAQ section is a valuable resource that provides answers to frequently asked questions about our services, and any other information that may be relevant to our customers.</p>
                </div>
                <div className="shemem">
                    <Accordion allowZeroExpanded>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is Gym free to use for everyone?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Only guests who have booked a villa in our resort are granted access to the gym.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What Special in our resort?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Our resort has a lemon-scented atmosphere that is noticeable to all guests, as well as an abundance of natural elements such as trees, mountains, and greenery, which creates a feeling of being immersed in nature. This combination of scents and surroundings can contribute to a relaxing and rejuvenating experience for guests, particularly those seeking a break from the hustle and bustle of daily life.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What types of food you deliver?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Our resort offers a wide range of food options that cater to a variety of tastes and preferences. This includes both oriental and western cuisine, as well as private meals that can be tailored to individual guests' needs and preferences.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Can bring food from outside the resort?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    At our resort, we have a policy that only allows guests to bring in small snacks from outside the premises. Outside meals or larger food items are not permitted. This policy is in place to ensure the safety and comfort of all our guests, and to maintain the high standards of cleanliness and hygiene within the resort.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FAQ