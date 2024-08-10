import { useState,useEffect  } from "react";

const Workflow = ({ workflowDetails }) => {
    const [expandedStates, setExpandedStates] = useState({});

    useEffect(() => {
        const initialExpandedStates = {};
        workflowDetails?.forEach((item) => {
            initialExpandedStates[item.id] = false;
        });
        setExpandedStates(initialExpandedStates);
    }, [workflowDetails]);

    const toggleExpanded = (id) => {
        setExpandedStates((prevStates) => ({
            ...prevStates,
            [id]: !prevStates[id],
        }));
    };
    const renderParamsExtra = (params) => {
        return Object.entries(params)?.map(([key, value]) => {
            if (key === 'id' || key === 'note' || key === 'dataset2') {
                return;
            } else if (Array.isArray(value)) {
                return (
                    <div key={key}>
                        {key}: {value.join(', ')}
                    </div>
                );
            } else if (typeof value === 'object' && value !== null) {
                return (
                    <div key={key}>
                        {key}:
                        <ul>
                            {Object.entries(value)?.map(([subKey, subValue]) => (
                                <li key={subKey}>{subKey}: {subValue?.toString()}</li>
                            ))}
                        </ul>
                    </div>
                );
            } else {
                return (
                    <div key={key}>
                        {key}: {value?.toString()}
                    </div>
                );
            }
        });
    };

    return (
        <article className="workflow-container">
            <div className="workflow-header bg-white border px-3 py-2 rounded-top d-flex justify-content-between">
                <p className="col-4 m-0">Workflow</p>
                <section className="col d-flex justify-content-end">
                    <i className="bi bi-x-lg me-2"></i>
                    <i className="bi bi-download me-2"></i>
                    <i className="bi bi-cloud-download me-2"></i>
                    <i className="bi bi-floppy2 me-2"></i>
                    <i className="bi bi-person-walking me-2"></i>
                    <i className="bi bi-calendar2-check me-2"></i>
                </section>
            </div>
            <div className="workflow-details bg-white border p-3">
                <div className="accordion w-100" id="accordionExample">
                    {workflowDetails?.map((workData, index) => (
                        <div key={workData.id} className="d-flex align-items-start w-100 my-2" >
                            <span className="accordion-icon mt-2 rounded-circle" data-bs-toggle="collapse" data-bs-target={`#${workData.id}`} aria-expanded={expandedStates[workData.id]} onClick={() => toggleExpanded(workData.id)}>
                                {expandedStates[workData.id] ? (
                                    <i className='rounded icon bi bi-dash icon-bold'></i>
                                ) : (
                                    <i className='rounded-circle icon bi bi-plus icon-bold'></i>
                                )}
                            </span>
                            <div className="accordion-item w-100">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" onClick={() => toggleExpanded(workData.id)} data-bs-target={`#${workData.id}`} aria-expanded="true" aria-controls={workData.id} >
                                        <p className="m-0">{workData.name_title}</p>
                                    </button>
                                </h2>
                                <div id={workData.id} className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        {renderParamsExtra(workData.params_extra)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </article>
    )
}

export default Workflow;