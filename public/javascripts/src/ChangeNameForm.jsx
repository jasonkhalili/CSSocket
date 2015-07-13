var React = require('react/addons');
$ = jQuery = require('jquery');


module.exports = React.createClass({
  getInitialState: function(){
      return {newName: ''};
  },
  onKey : function(e){
      this.setState({ newName : e.target.value });
  },
  handleSubmit : function(e){
      e.preventDefault();
      var newName = this.state.newName;
      this.props.onChangeName(newName);
      this.setState({ newName: '' });
  },
  render: function(){
      return(
          <div className='change_name_form'>
              <h3> Change Name </h3>
              <form onSubmit={this.handleSubmit}>
                  <input onChange={this.onKey} value={this.state.newName} />
              </form>
          </div>
      );
  }
});
