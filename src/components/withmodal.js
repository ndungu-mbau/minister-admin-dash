import React, { Component } from 'react'

const withModal = (Comp) => {
    const modalNumber = Math.random()
        .toString()
        .split(".")[1]
    return class Modal extends Component{
        show(){
            const el = document.getElementById(modalNumber)
            const modal = new window.bootstrap.Modal(el)
            modal.show()
        }

        hide(){
            const el = document.getElementById(modalNumber)
            el.classList.remove("show")
        }

        render(){
            const { styles = "", ...restProps } = this.props

            return (
            <div className={`modal fade ${styles}`} id={modalNumber} tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-modal="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <Comp {...restProps}></Comp>
                </div>
            </div>)
        }
    }
}

export default withModal