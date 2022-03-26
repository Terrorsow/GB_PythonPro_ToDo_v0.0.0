import React from 'react'


const CustomUserItem = ({custom_user}) => {
    return (
        <tr>
            <td>
                {custom_user.username}
            </td>
            <td>
                {custom_user.firstname}
            </td>
            <td>
                {custom_user.lastname}
            </td>
            <td>
                {custom_user.email}
            </td>
        </tr>
    )
}


const CustomUserList = ({custom_users}) => {
    return (
        <table>
            <th>
                User name
            </th>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Email
            </th>
            {custom_users.map((custom_user) => <CustomUserItem custom_user={custom_user} />)}
        </table>
    )
}


export default CustomUserList