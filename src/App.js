const React = require('react')

const App = React.createClass({
    getInitialState() {
        return {
            persons: [
                {
                    name: 'Tom',
                    id: 1
                }, {
                    name: 'Trip',
                    id: 2
                }, {
                    name: 'Derek',
                    id: 3
                }, {
                    name: 'Kendra',
                    id: 4
                }, {
                    name: 'Andrea',
                    id: 5
                }, {
                    name: 'Jared',
                    id: 6
                }, {
                    name: 'Joshua',
                    id: 7
                }, {
                    name: 'Chris',
                    id: 8
                }, {
                    name: 'Alex',
                    id: 9
                }, {
                    name: 'Joe',
                    id: 10
                }, {
                    name: 'Cameron',
                    id: 11
                }, {
                    name: 'Matt',
                    id: 12

                }
            ],
            members: [
                {
                    name: 'Tom',
                    id: 1
                }, {
                    name: 'Trip',
                    id: 2
                }
            ]
        }
    },
    addMember(m) {
        return (e) => {
            let members = this.state.members.filter(member => member.id !== m.id)
            this.setState({
                members: [
                    m, ...members
                ]
            })
            console.log('added member', members)
        }
    },
    removeMember(m) {
        return (e) => {
            let members = this.state.members.filter(member => member.id !== m.id)
            this.setState({members})
            console.log('removed member', members)
        }
    },
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <div className="fl ml4">
                    <h3>Persons</h3>
                    <div>
                        <ul>
                            {this.state.persons.map(person => <li key={person.id}>{person.name}
                                <button onClick={this.addMember(person)}>Add Member</button>
                            </li>)}
                        </ul>
                    </div>
                </div>
                <div className="fr mr4">
                    <h3>Team</h3>
                    <div>
                        <ul>
                            {this.state.members.map(member => <li key={member.id}>{member.name}
                                <button onClick={this.removeMember(member)}>Remove Member</button>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = App
