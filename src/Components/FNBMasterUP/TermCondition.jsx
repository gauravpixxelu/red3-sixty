import React, { useEffect } from "react";

function TermCondition() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            <div className="termscondition-page">


                <section className="terms-banner">
                    <div className="container">
                        <h1>Terms & Conditions</h1>
                    </div>
                </section>


                <section className="terms-data">
                    <div className="container">
                        <div className="terms-box">
                            <h2 className="hdng">General</h2>
                            <p className="hdng-16"><b>Eligibility:</b> Your company remains eligible for participation only if it satisfies the criteria laid out by the MasterUp program, which may change from time to time.</p>
                            <p className="hdng-16"><b>Benchmark-Based Selection:</b> Selection for participation is based on benchmark results. Selection is not guaranteed.</p>
                            <p className="hdng-16"><b>Termination:</b> FNB reserves the right to terminate your participation if your company no longer meets the necessary criteria.</p>
                            <p className="hdng-16"><b>No Grants or Cash Pay-out:</b> No grants will be paid out to participants, and any benefits received cannot be exchanged for cash.</p>
                            <p className="hdng-16"><b>Non-transferable:</b> Participation is non-transferable, and you may not cede or assign your rights and obligations under this program.</p>
                            <p className="hdng-16"><b>Final Selection:</b> The selection made for the program is final, and no special arrangements or appeals will be entertained.</p>
                        </div>

                        <div className="terms-box">
                            <h2 className="hdng">Relationship</h2>
                            <p className="hdng-16"><b>Independent Contractor:</b> RED3SIXTY is an independent service provider running the program. Neither party is considered an employee, agent, or partner of the other.</p>
                        </div>

                        <div className="terms-box">
                            <h2 className="hdng">Confidentiality and Ownership</h2>
                            <p className="hdng-16"><b>Confidentiality:</b> Information shared during the program is confidential and must not be disclosed to third parties without consent.</p>
                            <p className="hdng-16"><b>Intellectual Property:</b> Any intellectual property disclosed remains the property of your company.</p>
                        </div>

                        <div className="terms-box">
                            <h2 className="hdng">Attendance and Requirements</h2>
                            <p className="hdng-16"><b>Mandatory Induction:</b> Your company must attend a mandatory Induction Workshop as per the program schedule.</p>
                            <p className="hdng-16"><b>Mandatory Events:</b> Participation in events, activities, and reports designated as mandatory is required.</p>
                            <p className="hdng-16"><b>Minimum Participation:</b> Failure to attend or participate in at least 70% of mandatory events may result in termination.</p>
                            <p className="hdng-16"><b>Shareholder Attendance:</b> Up to two shareholders from your company may attend each event or activity.</p>
                        </div>

                        <div className="terms-box">
                            <h2 className="hdng">Use of Online System</h2>
                            <p className="hdng-16"><b>Registration:</b> You must register and maintain an updated profile on the program’s online system.</p>
                        </div>

                        <div className="terms-box">
                            <h2 className="hdng">Advisory and Support Services</h2>
                            <p className="hdng-16"><b>Services:</b> Business advisory, training, mentorship, and support services will be provided.</p>
                            <p className="hdng-16"><b>Limitation:</b> Services are discretionary and based on the availability of resources.</p>
                            <p className="hdng-16"><b>No Liability:</b> The Supplier is solely responsible for its actions, and has no claim against RED3SIXTY or the program for any business decisions made.</p>
                        </div>

                        <div className="terms-box">
                            <h2 className="hdng">Conduct</h2>
                            <p className="hdng-16"><b>Professionalism:</b> Conduct yourself professionally and courteously during program events.</p>
                            <p className="hdng-16"><b>No Disrepute:</b> Don’t act in any way that could harm the reputation of RED3SIXTY, the MasterUp program, or its sponsors or participants.</p>
                        </div>

                        <div className="terms-box">
                            <h2 className="hdng">Miscellaneous</h2>
                            <p className="hdng-16"><b>Amendments:</b> Any changes to this agreement must be in writing and signed by both parties.</p>
                            <p className="hdng-16"><b>Severability:</b> If any part of this agreement is found to be invalid, it won’t affect the rest of the agreement.</p>
                            <p className="hdng-16">By agreeing to these terms and conditions, you acknowledge that you understand and consent to the guidelines and responsibilities outlined above.</p>
                        </div>
                    </div>
                </section>

            </div>

        </>

    );
};

export default TermCondition