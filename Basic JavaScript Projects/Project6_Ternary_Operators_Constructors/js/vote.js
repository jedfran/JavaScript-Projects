// Voting Function; to see if the person is 18 or older.
function vote_func() {
    var vote_age, can_vote;
    vote_age = document.getElementById("vote_age").value;
    can_vote = (vote_age>=18) ? "You are allowed" : "You are not allowed";
    document.getElementById("conformation").innerHTML = can_vote + " to vote!"
}