# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Gameroom.destroy_all
Solution.destroy_all
Situation.destroy_all
Emotion.destroy_all



sharkAttack = Situation.create!({problem: "shark attack"})
spaceShip = Situation.create!({problem: "Woke up on a space shuttle"})
zombieBite = Situation.create!({problem: "You were bitten by a zombie"})
bossCar = Situation.create!({problem: "Totaled bosses car" })
puppy = Situation.create!({problem: "A puppy is following you home"})
gacha = Situation.create!({problem: "You started playing your first gacha game"})
mistakenIdentity = Situation.create!({problem: "You are mistaken for a criminal"})
lostWallet = Situation.create!({problem: "Lost your wallet"})
shapeShifter = Situation.create!({problem: "Trapped with a shapeshifter"})
mondays = Situation.create!({problem: "It is Monday"})

happy = Emotion.create!({feeling: "Happy"})
sad = Emotion.create!({feeling: "Sad"})
confused = Emotion.create!({feeling: "Confused"})
worried = Emotion.create!({feeling: "Worried"})

peanutButter = Solution.create!({help: "peanut butter"})
mallet = Solution.create!({help: "Mallet"})
danceOff = Solution.create!({help: "dance off"})
singing = Solution.create!({help: "singing"})
specialty = Solution.create!({help: "Love of..."})
