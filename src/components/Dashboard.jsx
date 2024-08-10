import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import Workflow from "./Workflow";
import { useEffect } from "react";
import { responseData } from "../utilits/const";
import { setDashboardTableData } from "../features/dashboardSlice";

const Dashboard = () => {
    const dashboardData = useSelector((state) => state.dashboard.data)
    const dispatch = useDispatch()

    useEffect(() => {
        // Here we are setting store from JSON constant provided 
        dispatch(setDashboardTableData(responseData))
    }, [])

    return (
        <div className="dashboard d-flex h-100 pt-4">
            <section className="col-9 mx-3">
                <header className="mb-1 d-flex col mb-3">
                    <section className="d-flex rounded border">
                        <div className="data border-end px-3 py-1 text-white rounded-start">
                            <i className="bi bi-gear me-1"></i>
                            <span>Data</span>
                        </div>
                        <div className="border-end px-3 py-1 bg-white">
                            <i className="bi bi-bar-chart-line me-1"></i>
                            <span>Summary</span>
                        </div>
                        <div className="border-end px-3 py-1 bg-white rounded-end">
                            <i className="bi bi-journal-text me-1"></i>
                            <span>Logs</span>
                        </div>
                    </section>
                    <section className="col d-flex justify-content-end opacity-25">
                        <div className="border px-2 py-1 bg-white col-3">
                            <i className="bi bi-floppy2 me-2"></i>
                            <span>Download</span>
                        </div>
                    </section>
                </header>
                <article className="table-container">
                    <div className="table-header-detials bg-white border px-2 py-2 rounded-top d-flex justify-content-between">
                        <div className="d-flex">
                            <article className="d-flex align-items-center me-2">
                                <div className="mx-2 px-2 rounded fw-bold">
                                    <i className="bi bi-gear me-1"></i>PROJECT NAME</div>
                                <p className="m-0">{dashboardData?.project_name}</p>
                            </article>

                            <article className="d-flex align-items-center me-2">
                                <div className="mx-2 px-2 rounded fw-bold">
                                    <i className="bi bi-database me-1"></i>OUTPUT DATABASE NAME</div>
                                <p className="m-0">{dashboardData?.output_name}</p>
                            </article>

                            <article className="d-flex align-items-center me-2">
                                <div className="mx-2 px-2 rounded fw-bold">LAST RUN</div>
                                <p className="m-0">{dashboardData?.last_run}</p>
                            </article>
                        </div>

                        <article className="d-flex me-2">
                            <div className="mx-2 px-2 fw-bold">Rows : {dashboardData?.row_count}</div>
                        </article>
                    </div>
                    <div className="table-view bg-white border p-3">
                        <Table tableHeader={dashboardData?.table_headers} tableData={dashboardData?.table_data}></Table>
                    </div>
                </article>
            </section>
            <section className="col me-2">
                <Workflow workflowDetails={dashboardData?.workflow_steps}></Workflow>
            </section>
        </div>
    )
}

export default Dashboard;