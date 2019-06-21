import * as React from 'react'
import Loader from 'react-loader-spinner'


interface IProps{
  result:string
  filelength:any
}

export default class Result extends React.Component<IProps,{}> {
  
  public render() {
    return (
      <div className="result">
        
        {
          this.props.result === "" && this.props.filelength>0 ?
            <Loader type="Puff" color="#85144b" height={80} width={80} /> :
            <div >
              <p> {this.props.result} </p>
            </div>
        }
        
      </div>
    )
  }
}
