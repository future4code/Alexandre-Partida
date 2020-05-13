import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {

	}

	onChangeComentario() {

	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={''}
				onChange={this.onChangeComentario}
				value={this.state.comentando}
		
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
