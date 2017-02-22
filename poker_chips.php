<?php
/**
 * Created by PhpStorm.
 * User: Kyle
 * Date: 10/24/2016
 * Time: 4:24 PM
 */

class MoneyStore{
    private $amount;
    public function set_amount($num){
        $this->amount = $num;
    }
    public function get_amount(){
        return $this-> amount;
    }
}
class PokerChips extends MoneyStore{
    public function add($num){
        $total = MoneyStore::get_amount() + $num;
        MoneyStore::set_amount($total);
    }
    public function subtract($num){
        if($num > MoneyStore::get_amount()){
            $num = MoneyStore::get_amount();
            $total = 0;
        }else{
            $total = MoneyStore::get_amount() - $num;
        }
        MoneyStore::set_amount($total);
        return $num;
    }
    public function all_in(){
        $total = MoneyStore::get_amount();
        MoneyStore::set_amount(0);
        return $total;
    }
    public function transfer_chips($amount, $account){
        if($account instanceof PokerChips){
            $transfer_amount = $this->subtract($amount);
            $account->add($transfer_amount);
            return $transfer_amount;
        }
    }
}

$PhilIvey = new PokerChips;
$HowardLederer = new PokerChips;

$PhilIvey->set_amount(1000);
$HowardLederer->set_amount(2000);

$HowardLederer->transfer_chips(500, $PhilIvey);
print_r("Phil: ".$PhilIvey->get_amount());
print('<br>');
print_r("Howard: ".$HowardLederer->get_amount());
print('<br>');

$HowardLederer->transfer_chips(500, $PhilIvey);
print_r("Phil: ".$PhilIvey->get_amount());
print('<br>');
print_r("Howard: ".$HowardLederer->get_amount());
print('<br>');

$PhilIvey->transfer_chips($PhilIvey->all_in(), $HowardLederer);
print_r("Phil: ".$PhilIvey->get_amount());
print('<br>');
print_r("Howard: ".$HowardLederer->get_amount());
print('<br>');

?>