import React, { Component } from 'react';
import './table.scss';

class Table extends Component {
    constructor(props) {
        super(props);
        const initDataShow =
            props.limit && props.bodyData
                ? props.bodyData.slice(0, Number(props.limit))
                : props.bodyData;


        this.state = {
            dataShow: initDataShow,
            pages: 1,
            range: [],
            currPage: 0,
            limit: props.limit,
        };
    }

    componentDidMount() {
        this.calculatePagination();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.bodyData !== this.props.bodyData) {

            this.calculatePagination();
            this.selectPage(0);
        }

    }

    calculatePagination() {
        const { bodyData } = this.props;
        const { limit } = this.state;
        if (limit !== undefined) {
            const page = Math.floor(bodyData.length / Number(limit));
            const pages =
                bodyData.length % Number(limit) === 0 ? page : page + 1;
            const range = [...Array(pages).keys()];
            this.setState({ pages, range });
        }
    }

    selectPage(page) {
        const { bodyData } = this.props;

        const { limit } = this.state;
        const start = Number(limit) * page;
        const end = start + Number(limit);
        const dataShow = bodyData.slice(start, end);
        this.setState({ dataShow, currPage: page });
    }

    handleLimitChange = (event) => {
        const newLimit = event.target.value;
        this.setState({ limit: newLimit }, () => {
            this.calculatePagination();
            this.selectPage(0);
        });
    };
    handleRowClick = (item) => {
        alert(`You clicked on row with item: ${JSON.stringify(item)}`);
    };
    render() {
        const { headData, renderHead, bodyData, renderBody } = this.props;
        const { dataShow, pages, range, currPage, limit } = this.state;

        return (
            <div>
                <div className="table-wrapper">
                    <table>
                        {headData && renderHead && (
                            <thead>
                                <tr>
                                    {headData.map((item, index) => renderHead(item, index))}
                                    {window.location.pathname !== '/' && <th>Hành động</th>}

                                </tr>

                            </thead>
                        )}
                        {bodyData && renderBody &&

                            (
                                <tbody >
                                    {dataShow.map((item, index) => renderBody(item, index))}

                                </tbody>
                            )}
                    </table>
                </div>
                <div className="table__limit" style={{ marginRight: "10px" }} >
                    <div>
                        <label htmlFor="limit" style={{ display: "inline" }}>Giới hạn:</label>
                        <select id="limit" value={limit} onChange={this.handleLimitChange}
                        >
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>

                    </div>
                    

                </div>
                {pages > 1 && (
                    <div className="table__pagination" >

                        {range.map((item, index) => (
                            <div
                                key={index}
                                className={`table__pagination-item ${currPage === index ? 'active' : ''
                                    }`}
                                onClick={() => this.selectPage(index)}
                            >
                                {item + 1}
                            </div>
                        ))}
                    </div>
                )}

            </div>
        );
    }
}

export default Table;