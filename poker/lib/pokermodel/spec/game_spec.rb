require 'rspec'
require_relative '../game'

class GameSpec
  describe 'Fold' do

    it 'should do something' do

      #To change this template use File | Settings | File Templates.
      true.should == true
    end
  end

  describe 'Call' do

    it 'should do something' do

      #To change this template use File | Settings | File Templates.
      true.should == true
    end
  end

  describe 'Bet' do

    it 'should do something' do

      #To change this template use File | Settings | File Templates.
      true.should == true
    end
  end

  describe 'DetermineWinner' do

    it 'should do something' do

      #To change this template use File | Settings | File Templates.
      true.should == true
    end
  end

  describe 'DistributePot' do

    it 'should do something' do

      #To change this template use File | Settings | File Templates.
      true.should == true
    end
  end

  describe "Flop" do
    it "should draw three cards." do
      game = Game.new
      game.flop
      game.communityCards.length.should eq(3)
    end
  end

  describe "Turn" do
    it "should draw one card." do
      game = Game.new
      game.turn
      game.communityCards.length.should eq(1)
    end
  end

  describe "River" do
    it "should draw one card." do
      game = Game.new
      game.river
      game.communityCards.length.should eq(1)
    end
  end


end