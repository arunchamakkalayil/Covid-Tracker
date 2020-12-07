import React , {Component} from 'react';
import Axios from 'axios';
class World extends Component{

    constructor(){
        super();
        this.state = {
            data : []
        }
    }
    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
            
        this.setState({data:response.data});

        });

    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="table table-responsive-sm">

                    <table className="table table-primary table-bordered table-hover table-sm" >
                        <thead>
                            <tr>
                                <td>Country</td>
                                <td>Total Cases</td>
                                <td>Recovered</td>
                                <td>Death</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((itm,ky)=>{
                                    return(
                                        <tr>
                                            <td>{itm.country}
                                            <img style={{width:'64px',margimLeft:'10px',paddingLeft:'4px'}} src={itm.countryInfo.flag}/>
                                            </td>
                                            <td>{itm.cases}</td>
                                            <td>{itm.recovered}</td>
                                            <td>{itm.deaths}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    </div>
                </div>
              
            </div>
        )
        
    }
}
export default World;