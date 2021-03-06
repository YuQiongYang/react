import React, {Component} from 'react'

class HeaderComponent extends Comment{
    render(){
        return (
            <div class="dk-header">
                <ul>
                    <li><router-link to="/">PrintERP</router-link></li>
                </ul>
                <ul>
                    <li>
                        <router-link class="dropdown-toggle count-info" to="/">
                            <i class="fa fa-bars"></i>
                            <span class="badge badge-primary"> 2</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="dropdown-toggle count-info" to="/">
                            <i class="fa fa-envelope"></i>
                            <span class="badge badge-primary"> 2</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="dropdown-toggle count-info" to="/">
                            Adminstrator
                        </router-link>
                    </li>						
                </ul>		
            </div>        
        )
    }
}

export default HeaderComponent